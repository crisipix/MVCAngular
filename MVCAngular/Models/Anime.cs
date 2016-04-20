using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVCAngular.Models
{
    public class Anime
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime Release { get; set; }
        public string Genre { get; set; }
        public string Studio { get; set; }
        public decimal Price { get; set; }
        public decimal Rating { get; set; }
    }
}