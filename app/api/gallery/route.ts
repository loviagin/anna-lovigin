import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// GET /api/gallery
export async function GET() {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI!);
    const db = client.db();
    const items = await db.collection('gallery').find().toArray();
    client.close();
    return NextResponse.json(items);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch gallery items' }, { status: 500 });
  }
}

// POST /api/gallery
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const client = await MongoClient.connect(process.env.MONGODB_URI!);
    const db = client.db();
    const result = await db.collection('gallery').insertOne(data);
    client.close();
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: 'Failed to add gallery item' }, { status: 500 });
  }
}

// PUT /api/gallery
export async function PUT(request: Request) {
  try {
    const { id, ...data } = await request.json();
    const client = await MongoClient.connect(process.env.MONGODB_URI!);
    const db = client.db();
    const result = await db.collection('gallery').updateOne(
      { id },
      { $set: data }
    );
    client.close();
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: 'Failed to update gallery item' }, { status: 500 });
  }
}

// DELETE /api/gallery
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const client = await MongoClient.connect(process.env.MONGODB_URI!);
    const db = client.db();
    const result = await db.collection('gallery').deleteOne({ id });
    client.close();
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: 'Failed to delete gallery item' }, { status: 500 });
  }
} 