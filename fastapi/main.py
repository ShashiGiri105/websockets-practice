from fastapi import FastAPI, WebSocket
import asyncio

app=FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket:WebSocket):
    await websocket.accept()

    print("client connected")

    await websocket.send_text("Hello from server")

    while True: 
        await websocket.send_text("Hi from server")
        await asyncio.sleep(5)