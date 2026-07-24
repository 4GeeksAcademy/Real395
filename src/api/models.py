from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import Numeric, Integer

db = SQLAlchemy()


class User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    firstname: Mapped[str] = mapped_column(String(120))
    lastname: Mapped[str] = mapped_column(String(120))
    email: Mapped[str] = mapped_column(
        String(120), unique=True, nullable=False)
    password: Mapped[str] = mapped_column(nullable=False)
    rol: Mapped[str] = mapped_column(String(50), nullable=True)

    is_active: Mapped[bool] = mapped_column(Boolean(), nullable=False)

    def __init__(self, firstname, lastname, email, password, rol):
        self.email = email
        self.password = password
        self.firstname = firstname
        self.lastname = lastname
        self.rol = rol

        self.is_active = True

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "rol": self.rol,
            # do not serialize the password, its a security breach
        }


class Budget(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    building: Mapped[str] = mapped_column(String(120))
    year: Mapped[int] = mapped_column(Integer)
    month: Mapped[int] = mapped_column(Integer)
    group: Mapped[str] = mapped_column(String(120))
    category: Mapped[str] = mapped_column(String(120))
    subcategory: Mapped[str] = mapped_column(String(120))
    quantity: Mapped[int] = mapped_column(Integer)
    base: Mapped[float] = mapped_column(Numeric(10, 2))
    total: Mapped[float] = mapped_column(Numeric(10, 2))

    def __init__(self, building, year, month, group, category, subcategory, quantity, base, total):
        self.building = building
        self.year = year
        self.month = month
        self.group = group
        self.category = category
        self.subcategory = subcategory
        self.quantity = quantity
        self.base = base
        self.total = total

    def serialize(self):
        return {
            "id": self.id,
            "building": self.building,
            "year": self.year,
            "month": self.month,
            "group": self.group,
            "category": self.category,
            "subcategory": self.subcategory,
            "quantity": self.quantity,
            "base": self.base,
            "total": self.total,
        }
