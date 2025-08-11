using System;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Campsites.Queries;

public class GetCampsiteList
{
    //QUery will contain query parameters
    public class Query : IRequest<List<Campsite>> { }

    //Handler handles and returns the response
    public class Handler(AppDbContext context) : IRequestHandler<Query, List<Campsite>>
    {
        public async Task<List<Campsite>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await context.Campsites.ToListAsync(cancellationToken);
        }
    }
}
