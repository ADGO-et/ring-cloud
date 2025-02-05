import { NextRequest, NextResponse } from "next/server";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";

import { Vacancy } from "@/interfaces/Vacancy";
import { schema, updateSchema } from "../schema";

import { query } from "@/utils/db";

interface Props {
  params: { id: string };
}

export const getVacancies = async (
  requrest: NextRequest
): Promise<NextResponse> => {
  try {
    const vacancies = await query<RowDataPacket[]>("SELECT * FROM vacancy");

    vacancies.forEach((vacancy) => {
      vacancy.requirements = vacancy.requirements
        ? JSON.parse(vacancy.requirements)
        : [];
    });

    return NextResponse.json({ vacancies, success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error,
        error: "Something unexpected happened.",
      },
      { status: 500 }
    );
  }
};

export const getVacancy = async (
  request: NextRequest,
  { params: { id } }: Props
): Promise<NextResponse> => {
  try {
    const result = await query<RowDataPacket[]>(
      "SELECT * FROM vacancy WHERE id = ?",
      [parseInt(id)]
    );
    const vacancies = result;

    if (!vacancies)
      return NextResponse.json(
        {
          success: false,
          error: `Vacancy with id: '${id}' not found`,
        },
        { status: 404 }
      );

    const vacancy = vacancies[0];

    vacancy.requirements = vacancy.requirements
      ? JSON.parse(vacancy.requirements)
      : [];

    return NextResponse.json({ vacancy, success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error,
        error: "Something unexpected happened.",
      },
      { status: 500 }
    );
  }
};

export const createVacancy = async (
  request: NextRequest
): Promise<NextResponse> => {
  try {
    const body: Vacancy = await request.json();

    const { error } = schema.validate(body);

    if (error)
      return NextResponse.json(
        { error: error.message, success: false },
        { status: 400 }
      );

    const result = await query<ResultSetHeader>(
      "INSERT INTO vacancy (title, description, requirements, urgent, period, contactLink) VALUES (?, ?, ?, ?, ?, ?)",
      [
        body.title,
        body.description,
        JSON.stringify(body.requirements),
        body.urgent,
        body.period,
        body.contactLink,
      ]
    );

    const vacancy = await query<RowDataPacket[]>(
      "SELECT * FROM vacancy WHERE id = ?",
      [result.insertId]
    );

    vacancy[0].requirements = vacancy[0].requirements
      ? JSON.parse(vacancy[0].requirements)
      : [];

    return NextResponse.json(
      { vacancy: vacancy[0], success: true },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error,
        error: "Something unexpected happened.",
      },
      { status: 500 }
    );
  }
};

export const editVacancy = async (
  request: NextRequest,
  { params: { id } }: Props
): Promise<NextResponse> => {
  try {
    const body: Vacancy = await request.json();

    const { error } = updateSchema.validate(body);
    if (error)
      return NextResponse.json(
        { error: error.message, success: false },
        { status: 400 }
      );

    const existingVacancy = await query<RowDataPacket[]>(
      "SELECT * FROM vacancy WHERE id = ?",
      [parseInt(id)]
    );
    if (!existingVacancy[0])
      return NextResponse.json(
        { success: false, error: `Vacancy with id: '${id}' not found.` },
        { status: 404 }
      );

    await query<ResultSetHeader>(
      "UPDATE vacancy SET title = ?, description = ?, requirements = ?, urgent = ?, period = ?, contactLink = ? WHERE id = ?",
      [
        body.title,
        body.description,
        JSON.stringify(body.requirements),
        body.urgent,
        body.period,
        body.contactLink,
        parseInt(id),
      ]
    );

    return NextResponse.json(
      { vacancy: { ...body }, success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error,
        error: "Something unexpected happened.",
      },
      { status: 500 }
    );
  }
};

export const deleteVacancy = async (
  request: NextRequest,
  { params: { id } }: Props
): Promise<NextResponse> => {
  try {
    const exisitingVacancies = await query<RowDataPacket[]>(
      "SELECT * FROM vacancy WHERE id = ?",
      [parseInt(id)]
    );
    if (!exisitingVacancies[0])
      return NextResponse.json(
        { success: false, error: `Vacancy with id: '${id}' not found.` },
        { status: 404 }
      );

    await query<ResultSetHeader>("DELETE FROM vacancy WHERE id = ?", [
      parseInt(id),
    ]);

    return NextResponse.json(
      { vacancy: exisitingVacancies[0], success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error,
        error: "Something unexpected happened.",
      },
      { status: 500 }
    );
  }
};
