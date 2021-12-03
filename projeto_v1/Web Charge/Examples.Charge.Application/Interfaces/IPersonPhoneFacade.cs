using Examples.Charge.Application.Messages.Request;
using Examples.Charge.Application.Messages.Response;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Examples.Charge.Application.Interfaces
{
    public interface IPersonPhoneFacade
    {
        Task<PersonPhoneResponse> FindAllAsync();

        Task<PersonPhoneResponse> FindByIdAsync(string id);
        Task AddAsync(PersonPhoneRequest request);
        Task UpdateAsync(PersonPhoneRequest request);
        Task RemoveAsync(PersonPhoneRequest request);
        
    }
}
