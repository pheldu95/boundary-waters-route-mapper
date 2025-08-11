using System;
using Application.Campsites.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class CampsitesController(AppDbContext context, IMediator mediator) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Campsite>>> GetCampsites()
    {
        return await mediator.Send(new GetCampsiteList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Campsite>> GetCampsiteDetails(string id)
    {
        var campsite = await context.Campsites.FindAsync(id);

        if (campsite == null) return NotFound();

        return campsite;
    }
}
