using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Campsites.Commands;

public class CreateCampsite
{
    public class Command : IRequest<string>
    {
        public required Campsite Campsite { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command, string>
    {
        public async Task<string> Handle(Command request, CancellationToken cancellationToken)
        {
            context.Campsites.Add(request.Campsite);

            await context.SaveChangesAsync(cancellationToken);

            //even though it's a "command", we will return the Id.
            return request.Campsite.Id;
        }
    }
}
