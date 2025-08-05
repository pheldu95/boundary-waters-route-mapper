using System;
using Domain;

namespace Persistence;

public class DbInitializer
{
    public static async Task SeedData(AppDbContext context)
    {
        if (context.Campsites.Any()) return;

        var campsites = new List<Campsite>
        {
            new() {
                Name = "CAMP-1",
                Description = "CAMP- Lac la Croix - 1 - status: open",
                Url = "https://bwca.com/?fuseaction=maps.camp_info&entityid=1&elat=48.34503&elon=-92.271738",
                Latitude = 48.34503,
                Longitude = -92.271738,
            },
            new() {
                Name = "CAMP-2",
                Description = "CAMP- Lac la Croix - 2 - status: open",
                Url = "https://bwca.com/?fuseaction=maps.camp_info&entityid=2&elat=48.34541&elon=-92.257993",
                Latitude = 48.34541,
                Longitude = -92.257993,
            },
            new() {
                Name = "CAMP-3",
                Description = "CAMP- Loon Lake - 3 - status: open",
                Url = "https://bwca.com/?fuseaction=maps.camp_info&entityid=3&elat=48.23834&elon=-92.29945",
                Latitude = 48.23834,
                Longitude = -92.29945,
            },
            new() {
                Name = "CAMP-4",
                Description = "CAMP- Upper Pauness Lake - 4 - status: open",
                Url = "https://bwca.com/?fuseaction=maps.camp_info&entityid=4&elat=48.18912&elon=-92.249084",
                Latitude = 48.18912,
                Longitude = -92.249084,
            },
        };

        //similar to doctrine em.persist(campsites)
        context.Campsites.AddRange(campsites);

        //similar to doctrine em.flush()
        await context.SaveChangesAsync();
    }
}
