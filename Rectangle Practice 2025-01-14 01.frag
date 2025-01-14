// Author: Zachary
// Title: Rectangle Practice 2025-01-14 01

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    // bottom-left
    vec2 bl = step(vec2(0.3, 0.1), st);
    vec2 bl2 = step(vec2(0.4, 0.2), st);

    float pct = bl.x * bl.y;
    float pct2 = bl2.x * bl2.y;
    
    // top-right
    vec2 tr = step(vec2(0.1, 0.5), 1.0-st);
    vec2 tr2 = step(vec2(0.2, 0.6), 1.0-st);
    
    pct *= tr.x * tr.y;
    pct2 *= tr2.x * tr2.y;

    color = vec3(1.0 - step(2.0, pct + (1.0 - pct2)));

    gl_FragColor = vec4(color,1.0);
}