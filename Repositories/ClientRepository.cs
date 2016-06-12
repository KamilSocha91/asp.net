using System;
using System.Collections.Generic;
using System.Linq;
using serverApi.Models;

namespace serverApi.Repositories
{
    public class ClientRepository
    {
        private Dictionary<int, Client> clients;
        private int previousId;
        		
        public ClientRepository () {
            this.previousId = 1;
            this.clients = new Dictionary<int, Client>();
        }
        
        public void add ( Client client ) {
            client.Id = this.previousId;
            this.clients.Add( this.previousId, client );
            this.previousId++;
        }

        public void update ( int id, Client client ) {
            client.Id = id;
            this.clients.Remove( id );
            this.clients.Add( id, client );
        }
        
        public Dictionary<int, Client> getAll() {
            return this.clients;
        }

        public Client getOne ( int id ) {
            return this.clients[id];
        }

        public bool delete ( int id ) {
            this.clients.Remove( id );
            this.previousId--;
            return true;
        }
    }
}
