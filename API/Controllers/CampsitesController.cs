using System;
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
        return await Mediator.Send(new GetCampsiteDetails.Query {Id = id});
    }
}
