using AutoMapper;
using Examples.Charge.Application.Dtos;
using Examples.Charge.Application.Interfaces;
using Examples.Charge.Application.Messages.Request;
using Examples.Charge.Application.Messages.Response;
using Examples.Charge.Domain.Aggregates.PersonAggregate;
using Examples.Charge.Domain.Aggregates.PersonAggregate.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Examples.Charge.Application.Facade
{
    public class PersonPhoneFacade : IPersonPhoneFacade
    {
        private IPersonPhoneService _personPhoneService;
        private IMapper _mapper;

        public PersonPhoneFacade(IPersonPhoneService personPhoneService, IMapper mapper)
        {
            _personPhoneService = personPhoneService;
            _mapper = mapper;
        }

        public async Task<PersonPhoneResponse> FindAllAsync()
        {
            var result = await _personPhoneService.FindAllAsync();
            var response = new PersonPhoneResponse();
            response.PersonPhoneObjects = new List<PersonPhoneDto>();
            response.PersonPhoneObjects.AddRange(result.Select(x => _mapper.Map<PersonPhoneDto>(x)));
            return response;
        }

        public async Task<PersonPhoneResponse> FindByIdAsync(string id)
        {
            var result = await _personPhoneService.GetByIdAsync(id);
            var response = new PersonPhoneResponse();
            response.PersonPhoneObjects = new List<PersonPhoneDto>();
            response.PersonPhoneObjects.Add(_mapper.Map<PersonPhoneDto>(result));
            return response;
        }

        public async Task AddAsync(PersonPhoneRequest request)
        {
            await _personPhoneService.AddAsync(_mapper.Map<PersonPhone>(request));
        }

        public async Task UpdateAsync(PersonPhoneRequest request)
        {
            await _personPhoneService.UpdateAsync(_mapper.Map<PersonPhone>(request));
        }
        public async Task RemoveAsync(PersonPhoneRequest request)
        {
            await _personPhoneService.RemoveAsync(_mapper.Map<PersonPhone>(request));
        }
    }
}
