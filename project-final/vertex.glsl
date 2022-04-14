attribute vec2 uv;
attribute vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec 2 vUv;

void main() {
    vUv = uv;

    gl_Position = pojectionMatrix * modelViewMatrix * vec4(position,1.0);
}