from fastapi import FastAPI, HTTPException
from db import read_all_pcfs, read_pcf, create_pcf
from models import Pcf, PcfCreate
from uuid import UUID

app = FastAPI()

@app.post("/footprints", response_model=Pcf)
async def create_pcf_endpoint(pcf: PcfCreate) -> Pcf:
    """
    Create a new entry for Pcfs in the database.
    """
    try:
        new_pcf = await create_pcf(pcf)
        return new_pcf
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/footprints/{id}", response_model=Pcf)
async def get_pcf(id: UUID):
    """
    Query a specific Pcf entry.
    """
    try:
        pcf = await read_pcf(id)
        if not pcf:
            raise HTTPException(status_code=404, detail="PCF not found")
        return pcf
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")

@app.get("/pcfs", response_model=list[Pcf])
async def get_pcfs():
    """
    Query all the Pcfs entries.
    """
    try:
        pcfs = await read_all_pcfs()

        # Using a list as database will always return an empty list, but we handle the case here either way
        return pcfs if pcfs else []
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")
