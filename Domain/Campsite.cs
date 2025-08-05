using System;

namespace Domain;

public class Campsite
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string Name { get; set; }
    public required string Description { get; set; }
    public required string Url { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
}
