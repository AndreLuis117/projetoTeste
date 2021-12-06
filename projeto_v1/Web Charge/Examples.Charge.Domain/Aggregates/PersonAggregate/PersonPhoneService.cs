using Examples.Charge.Domain.Aggregates.PersonAggregate.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Examples.Charge.Domain.Aggregates.PersonAggregate
{
    public class PersonPhoneService : IPersonPhoneService
    {
        private readonly IPersonPhoneRepository _personPhoneRepository;
        public PersonPhoneService(IPersonPhoneRepository personPhoneRepository)
        {
            _personPhoneRepository = personPhoneRepository;
        }

        public async Task<List<PersonPhone>> FindAllAsync() => (await _personPhoneRepository.FindAllAsync()).ToList();

        public async Task<PersonPhone> GetByPhoneNumberAsync(string phoneNumber)
        {
            return await _personPhoneRepository.GetByPhoneNumberAsync(phoneNumber);
        }


        public async Task AddAsync(PersonPhone entity)
        {
            await _personPhoneRepository.AddAsync(entity);
        }

        public async Task UpdateAsync(PersonPhone entity)
        {
            await _personPhoneRepository.UpdateAsync(entity);
        }

        public async Task RemoveAsync(PersonPhone entity)
        {
            await _personPhoneRepository.RemoveAsync(entity);
        }
    }
}
