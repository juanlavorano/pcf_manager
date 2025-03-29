from uuid import uuid4, UUID
from models import Pcf, PcfCreate

pcfs = []

async def read_all_pcfs() -> list[Pcf]:
    return pcfs

async def read_pcf(id: UUID) -> Pcf | None:
    for pcf in pcfs:
        if pcf.id == id:
            return pcf
    return None

async def create_pcf(pcf: PcfCreate) -> Pcf:
    new_pcf = Pcf(id=uuid4(), **pcf.model_dump())
    pcfs.append(new_pcf)
    return new_pcf
