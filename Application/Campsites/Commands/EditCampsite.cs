using System;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Campsites.Commands;

public class EditCampsite
{
    public class Command : IRequest
    {
        public required Campsite Campsite { get; set; }
    }

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var campsite = await context.Campsites
                .FindAsync([request.Campsite.Id], cancellationToken)
                    ?? throw new Exception("Cannot find campsite"); //if returns null, then throw exception

            mapper.Map(request.Campsite, campsite);

            await context.SaveChangesAsync(cancellationToken);
        }
    }
}
