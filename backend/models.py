from pydantic import BaseModel, Field, confloat
from uuid import UUID, uuid4

class BasePcf(BaseModel):
    productName: str = Field(..., description="Name of the product", example="EcoBrick")
    declaredUnit: str = Field(..., description="Unit in which emissions are declared (e.g., kg, liter, m2)", example="kg")
    emission: confloat(ge=0) = Field(..., description="KgCO2 per declared unit", example=20.5)

class PcfCreate(BasePcf):
    """Model for creating a new PCF entry."""
    pass

class Pcf(BasePcf):
    """Model for retrieving existing PCF entries."""
    id: UUID = Field(..., description="Unique identifier for the PCF", example="123e4567-e89b-12d3-a456-426614174000")
