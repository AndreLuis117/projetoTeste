using AutoMapper;
using Examples.Charge.Application.Interfaces;
using Examples.Charge.Application.Messages.Request;
using Examples.Charge.Application.Messages.Response;
using Examples.Charge.Domain.Aggregates.PersonAggregate.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Examples.Charge.API.Controllers
{
    [Route("api/personPhone")]
    [ApiController]
    public class PersonPhoneController : BaseController
    {
        private IPersonPhoneFacade _facade;

        public PersonPhoneController(IPersonPhoneFacade facade, IMapper mapper)
        {
            _facade = facade;
        }

        [HttpGet]
        public async Task<ActionResult<PersonPhoneResponse>> Get() => Response(await _facade.FindAllAsync());

        [HttpGet("{id}")]
        public async Task<ActionResult<PersonPhoneResponse>> Get(string id)
        {
            return Response(await _facade.FindByIdAsync(id));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] PersonPhoneRequest request)
        {
            try
            {

                await _facade.AddAsync(request);

                return this.StatusCode(StatusCodes.Status200OK);

            }
            catch (Exception e)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }

            return BadRequest();
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] PersonPhoneRequest request)
        {
            try
            {

                await _facade.UpdateAsync(request);

                return this.StatusCode(StatusCodes.Status200OK);

            }
            catch (Exception e)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }

            return BadRequest();
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromBody] PersonPhoneRequest request)
        {
            try
            {

                await _facade.RemoveAsync(request);

                return this.StatusCode(StatusCodes.Status200OK);

            }
            catch (Exception e)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }

            return BadRequest();
        }
    }
}
