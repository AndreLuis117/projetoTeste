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

        public async Task<IEnumerable<PersonPhone>> FindAllAsync() => await Task.Run(() => _context.PersonPhone);

        public Task<PersonPhone> GetByIdAsync(string id)
        {
            return _context.Set<PersonPhone>().FindAsync(id);
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
