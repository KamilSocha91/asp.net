using System.ComponentModel.DataAnnotations;

namespace serverApi.Models
{
    public class Client
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Domain { get; set; }

        public Client (string name, string email, string domain) {
            this.Name = name;
            this.Email = email;
            this.Domain = domain;
        }
    }
}
