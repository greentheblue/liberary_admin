import { NextResponse } from "next/server";
import { entityPrisma } from "@/lib/db";
import {hash} from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Hash the password if provided
    let hashedPassword;
    if (body.password) {
      hashedPassword = await hash(body.password, 10);
    }

    const staff = await entityPrisma.staff.create({
      data: {
        name: body.name,
        entityId: body.entityId,
        gender: body.gender,
        phone: body.phone,
        email: body.email,
        address: body.address,
        pasword: hashedPassword, // Note: field has typo in schema (pasword instead of password)
      },
      include: {
        entity: true,
      },
    });

    return NextResponse.json(staff);
  } catch (error) {
    console.error("Error creating staff:", error);
    return NextResponse.json(
      { error: "Failed to create staff" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const staff = await entityPrisma.staff.findMany({
      include: {
        entity: {
          select: { name: true },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ staff }, { status: 200 });
  } catch (error) {
    console.error("Error fetching staff:", error);
    return NextResponse.json({ error: "Failed to fetch staff" }, { status: 500 });
  }
}