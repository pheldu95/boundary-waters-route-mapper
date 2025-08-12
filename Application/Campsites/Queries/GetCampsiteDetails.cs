using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Campsites.Queries;

public class GetCampsiteDetails
{
    public class Query : IRequest<Campsite>
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Campsite>
    {
        public async Task<Campsite> Handle(Query request, CancellationToken cancellationToken)
        {
            var campsite = await context.Campsites.FindAsync([request.Id], cancellationToken);

            if (campsite == null) throw new Exception("Campsite not found");

            return campsite;
        }
    }
}
