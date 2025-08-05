using System;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class CampsitesController(AppDbContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Campsite>>> GetCampsites()
    {
        return await context.Campsites.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Campsite>> GetCampsiteDetails(string id)
    {
        var campsite = await context.Campsites.FindAsync(id);

        if (campsite == null) return NotFound();

        return campsite;
    }
}
