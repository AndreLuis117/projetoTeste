﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Examples.Charge.Domain.Aggregates.PersonAggregate.Interfaces
{
    public interface IPersonPhoneRepository
    {
        Task<IEnumerable<PersonAggregate.PersonPhone>> FindAllAsync();
        Task<PersonPhone> GetByIdAsync(string id);
        Task AddAsync(PersonPhone entity);
        Task UpdateAsync(PersonPhone entity);
        Task RemoveAsync(PersonPhone entity);

    }
}