using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCAngular.Controllers
{
    public class HelloWorldController : Controller
    {
        // GET: HelloWorld
        /*
         Right click the Views\HelloWorld folder and click Add, then click MVC 5 View Page with (Layout Razor).
         * In the Specify Name for Item dialog box, enter Index, and then click OK.
         * In the Select a Layout Page dialog, accept the default _Layout.cshtml and click OK.
         * The MvcMovie\Views\HelloWorld\Index.cshtml file is created. 
         * 
         * http://localhost/MVCAngular/HelloWorld
         */
        public ActionResult Index()
        {

            return View();
        }

        /// <summary>
        /// http://localhost/MVCAngular/HelloWorld
        /// </summary>
        //public string Index()
        //{
        //    return "This is my <b>default</b> action...";
        //}

        // 
        // GET: /HelloWorld/Welcome/ 

        //public string Welcome()
        //{
        //    return "This is the Welcome action method...";
        //} 

        /*
         http://localhost/MVCAngular/HelloWorld/Welcome?name=Scott&numtimes=4
         Hello Scott, NumTimes is: 4, ID: 1
          
         http://localhost/MVCAngular/HelloWorld/Welcome/99?name=Scott
         Hello Scott, NumTimes is: 1, ID: 99 
         * 
         * HelloWorld/Welcome/Scott/3
         */
        //public string Welcome(string name, int numTimes = 1, int ID = 1)
        //{
        //    return HttpUtility.HtmlEncode("Hello " + name + ", NumTimes is: " + numTimes + ", ID: " + ID);
        //}


        // THis will return a view with repeated items. 
        //http://localhost/MVCAngular/HelloWorld/Welcome?name=Scott&numtimes=4
         public ActionResult Welcome(string name, int numTimes = 1, int ID = 1)
        {
            ViewBag.Message = "Hello " + name;
            ViewBag.NumTimes = numTimes;

            return View();
        }

         


    }
}