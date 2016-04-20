using System;
using System.Data.Entity;

namespace MVCAngular.Models
{
    public class Manga
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime Release { get; set; }
        public string Genre { get; set; }
        public decimal Price { get; set; }

    }

    public class DBContext : DbContext
    {
        public DbSet<Manga> Movies { get; set; }
    }

}