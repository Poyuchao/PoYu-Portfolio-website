import { NextRequest, NextResponse } from 'next/server';

export function GET() {
    return NextResponse.json({ message: 'Hello from API' });
}

export function POST() {
    return NextResponse.json({ message: 'Hello from POST' });
}