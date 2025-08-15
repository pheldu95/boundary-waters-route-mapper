using System;
using Application.Campsites.Commands;
using Application.Campsites.Queries;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class CampsitesController() : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Campsite>>> GetCampsites()
    {
        return await Mediator.Send(new GetCampsiteList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Campsite>> GetCampsiteDetails(string id)
    {
        return await Mediator.Send(new GetCampsiteDetails.Query { Id = id });
    }

    [HttpPost] //Task<ActionResult<string>> the <string> part is the GUID that gets returned from the POST
    public async Task<ActionResult<string>> CreateCampsite(Campsite campsite)
    {
        return await Mediator.Send(new CreateCampsite.Command { Campsite = campsite });
    }

    [HttpPut]
    public async Task<ActionResult> EditCampsite(Campsite campsite)
    {
        await Mediator.Send(new EditCampsite.Command { Campsite = campsite });

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteCampsite(string id)
    {
        await Mediator.Send(new DeleteCampsite.Command { Id = id });

        return Ok();
    }
}
