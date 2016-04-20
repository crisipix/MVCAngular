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
        public DBContext()
        {
           

        }

        //public DBContext( )
        //    : base()
        //{
        //    Database.SetInitializer<DBContext>(null);
        //}

        public DbSet<Manga> Movies { get; set; }
        public DbSet<Anime> Anime { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //he model backing the 'DBContext' context has changed since the database was created. Either manually delete/update the database
            Database.SetInitializer<DBContext>(null);

            base.OnModelCreating(modelBuilder);
        }
    }

}