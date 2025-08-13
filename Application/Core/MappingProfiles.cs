using System;
using AutoMapper;
using Domain;

namespace Application.Core;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Campsite, Campsite>(); //telling automapper that is job is to map on campsite to another campsite. For PUTs for example
    }
}
