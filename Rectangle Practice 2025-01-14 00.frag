// Author: Zachary
// Title: Rectangle Practice 2025-01-14

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
    // vec2 bl = smoothstep(vec2(0.0), vec2(0.3, 0.1),st);
    vec2 bl = step( vec2(0.3, 0.1+0.3*sin(u_time)),st);
    float pct = bl.x * bl.y;

    // top-right
    // vec2 tr = smoothstep(vec2(0.0), vec2(0.1, 0.5),1.0-st);
	 vec2 tr = step(vec2(0.1,0.5-0.3*sin(u_time)),1.0-st);
    pct *= tr.x * tr.y;

    color = vec3(pct);

    gl_FragColor = vec4(color,1.0);
}