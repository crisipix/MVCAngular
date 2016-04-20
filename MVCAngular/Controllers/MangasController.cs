using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MVCAngular.Models;

namespace MVCAngular.Controllers
{
    public class MangasController : Controller
    {
        private DBContext db = new DBContext();

        // GET: Mangas
        public ActionResult Index()
        {
            return View(db.Movies.ToList());
        }

        // GET: Mangas/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Manga manga = db.Movies.Find(id);
            if (manga == null)
            {
                return HttpNotFound();
            }
            return View(manga);
        }

        // GET: Mangas/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Mangas/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Title,Release,Genre,Price")] Manga manga)
        {
            if (ModelState.IsValid)
            {
                db.Movies.Add(manga);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(manga);
        }

        // GET: Mangas/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Manga manga = db.Movies.Find(id);
            if (manga == null)
            {
                return HttpNotFound();
            }
            return View(manga);
        }

        // POST: Mangas/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Title,Release,Genre,Price")] Manga manga)
        {
            if (ModelState.IsValid)
            {
                db.Entry(manga).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(manga);
        }

        // GET: Mangas/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Manga manga = db.Movies.Find(id);
            if (manga == null)
            {
                return HttpNotFound();
            }
            return View(manga);
        }

        // POST: Mangas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Manga manga = db.Movies.Find(id);
            db.Movies.Remove(manga);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
