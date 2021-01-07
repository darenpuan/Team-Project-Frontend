using System;

namespace CoreApp.Setup
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("CoreApp:Setup Starting...");
            using (var context = new CoreDbContext())
            {
                // This will drop database, please reconnect after running.
                context.Seed();
            }
            Console.WriteLine("CoreApp:Setup Done!");
        }
    }
}
