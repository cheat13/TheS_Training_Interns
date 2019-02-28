using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DemoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DemoController : ControllerBase
    {
        public class Classroom
        {
            public string Id { get; set; }
            public string Name { get; set; }
            public int Score { get; set; }
        }
        public static List<Classroom> allMember = new List<Classroom>{
                new Classroom { Id = "S01", Name = "Mick", Score = 100 },
                new Classroom { Id = "S02", Name = "Aurora", Score = 90 },
                new Classroom { Id = "S03", Name = "Boss", Score = 200 },
            };

        [HttpGet]
        public List<Classroom> Get()
        {
            return allMember;
        }

        [HttpGet("{id}")]
        public Classroom Get(string id)
        {
            return allMember.FirstOrDefault(it => it.Id == id); ;
        }

        [HttpPost]
        public void Post([FromBody] Classroom value)
        {
            var addStudent = new Classroom
            {
                Id = value.Id,
                Name = value.Name,
                Score = value.Score
            };

            allMember.Add(addStudent);
        }

        [HttpPut]
        public void Put([FromBody] Classroom value)
        {
            if (allMember.Any(it => it.Id == value.Id))
            {
                var addStudent = allMember.FirstOrDefault(it => it.Id == value.Id);
                if (addStudent != null)
                {
                   addStudent.Score = value.Score;
                }
            }
        }

        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            var deleteStudent = allMember.FirstOrDefault(it => it.Id == id);
            allMember.Remove(deleteStudent);
        }
    }
}
