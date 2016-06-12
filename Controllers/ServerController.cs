using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using serverApi.Repositories;
using serverApi.Models;
using serverApi.ViewModel;

namespace serverApi.Controllers
{
	[Route("api/[controller]")]
	public class ServerController : Controller
	{
		private ClientRepository clients;

		public ServerController (ClientRepository clients) {
            this.clients = clients;
        }

		/**
		* Metoda pobierająca
		*
		* return array
		*/
		[HttpGet]
		public ContentResult getClientList ( ) {
            Dictionary<int, Client> clients = this.clients.getAll();
            string json = JsonConvert.SerializeObject(clients);
            
            return this.Content(json, "application/json");
		}

		/**
		* Metoda pobierająca element
		*
		* @param int id
		*
		* return array
		*/
		[HttpGet("{id}")]
		public ContentResult getSingleClient ( int id ) {
			Client clients = this.clients.getOne( id );
            string json = JsonConvert.SerializeObject(clients);
            
            return this.Content(json, "application/json");
		}

		/**
		* Metoda tworząca
		*
		* @param int id
		*
		* return array
		*/
		[HttpPost]
		public ContentResult PostClient ( ClientVM clientVM ) {
            Client clients = new Client( clientVM.Name, clientVM.Email, clientVM.Domain ); 
            this.clients.add(clients);
            
            return this.Content( JsonConvert.SerializeObject( clients ), "application/json" );
        }

		/**
		* Metoda edytująca 
		*
		* @param int id
		*
		* return array
		*/
        [HttpPut("{id}")]
		public ContentResult putClient ( int id, ClientVM clientVM ) {
            Client clients = new Client( clientVM.Name, clientVM.Email, clientVM.Domain  ); 
            this.clients.update( id, clients );
            
            return this.Content( JsonConvert.SerializeObject( clients ), "application/json" );
		}

		/**
		* Metoda usuwająca
		*
		* @param int id
		*
		* return array
		*/
		[HttpDelete("{id}")]
		public void deleteSingleClient ( int id ) {
			bool removed = this.clients.delete( id );
		}

	}

}
