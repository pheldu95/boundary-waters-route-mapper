using System;
using MediatR;
using Persistence;

namespace Application.Campsites.Commands;

public class DeleteCampsite
{
    public class Command : IRequest
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var campsite = await context.Campsites
                .FindAsync([request.Id], cancellationToken)
                    ?? throw new Exception("Cannot find campsite"); //if returns null, then throw exception

            context.Remove(campsite);

            await context.SaveChangesAsync(cancellationToken);
        }
    }
}
