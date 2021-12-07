using Examples.Charge.Domain.Aggregates.PersonAggregate;
using Examples.Charge.Domain.Aggregates.PersonAggregate.Interfaces;
using Examples.Charge.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Examples.Charge.Infra.Data.Repositories
{
    public class PersonPhoneRepository : IPersonPhoneRepository
    {
        private readonly ExampleContext _context;

        public PersonPhoneRepository(ExampleContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<IEnumerable<PersonPhone>> FindAllAsync() => await Task.Run(() => _context.PersonPhone.Include(x => x.PhoneNumberType));

        public async Task<PersonPhone> GetByPhoneNumberAsync(string phoneNumber)
        {
            return await _context.Set<PersonPhone>().Include(x => x.PhoneNumberType).FirstAsync(x => x.PhoneNumber == phoneNumber);
        }


        public async Task AddAsync(PersonPhone entity)
        {
            await _context.Set<PersonPhone>().AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(PersonPhone entity)
        {
            _context.Set<PersonPhone>().Update(entity);

            await _context.SaveChangesAsync();
        }

        public async Task RemoveAsync(PersonPhone entity)
        {
            _context.Set<PersonPhone>().Remove(entity);
            await _context.SaveChangesAsync();
        }
    }
}
