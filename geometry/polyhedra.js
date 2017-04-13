'use strict';
import { getPerimeter, P_circ, A_circ, A_triangle, P_rect, A_rect } from './polygons';


// Returns the slant height `L` of a right, circular cone, defined as the
//  Euclidean distance from any point on the circle demarcating the cone's
//  base to the apex of the cone:
export const getSlantHeight = (r = 1, h = 1) => (r.squared() + h.squared()).sqrt();


// Returns the volume of a cube with edge length, `a`:
export const V_cube = (a = 1) => a.cubed();

// Returns the surface area of a cube:
export const SA_cube = (a = 1) => a.squared().mult(6);


// Returns the volume of a rectangular prism with dimensions of width `w`,
//  length `l` and height `h`:
export const V_rectangularPrism = (l = 1, w = 1, h = 1) => (l * w * h);

// Returns the surface area of a rectangular prism:
export const SA_rectangularPrism = (l = 1, w = 1, h = 1) => (
  2 * ((l * w) + (l * h) + (w * h))
);


// Returns the volume of any generic, right prism. While, formulaically, this
//  holds true for all of rectangular prisms, wedges and cylinders, it is
//  programmatically less optimal when applied unto these degenerate cases;
//  rather, this function should take precedence where the those of the
//  aforementioned do not apply, such as prisms with non-ordinary polygonal
//  bases (e.g., a pentagonal prism):
export const V_prism = (A_base, h = 1) => (A_base * h);


// Returns the volume of a triangular prism (otherwise known as a wedge):
export const V_wedge = (b = 1, h = 1, l = 1) => (A_triangle(b, h) * l);

// Returns the surface area of a wedge:
export const SA_wedge = (b = 1, h = 1, l = 1, a1, a2, a3) => (
  (b * h) + ((s1 + s2 + s3) * l)
);


// Returns the volume of a sphere:
export const V_sphere = (r = 1) => ((4 / 3) * Math.PI * r.cubed());

// Returns the surface area of a sphere:
export const SA_sphere = (r = 1) => (4 * Math.PI * r.squared());


// Returns the volume of a cylinder:
export const V_cyl = (r = 1, h = 1) => (A_circ(r) * h);

// Returns the surface area of a cylinder:
export const SA_cyl = (r = 1, h = 1) => (P_circ(r) * (r + h));


// Returns the volume of a right, circular cone given the radius `r` of its
//  base and the normal height from orthogonally projected from the basal plane
//  to the cone's apex, `h`:
export const V_circularCone = (r = 1, h = 1) => ((1 / 3) * A_circ(r) * h);

// Returns the surface area of a right, circular cone:
export const SA_circularCone = (r = 1, h = 1) => (
  Math.PI * r * (r + (h.squared() + r.squared()).sqrt())
);


// Returns the volume of a right, pyramidal cone (rectangular base):
export const V_pyramid = (s1 = 1, s2 = 1, h = 1) => ((1 / 3) * s1 * s2 * h);

// Returns the surface area of a right, pyramidal cone (rectangular base):
export const SA_pyramid = (s1 = 1, s2 = 1, h = 1) => (A_rect(s1, s2)
  + (s1 * ((s2 / 2).squared() + h.squared()).sqrt())
  + (s2 * ((s1 / 2).squared() + h.squared()).sqrt())
);


// Returns the volume of a tetrahedron for which `h` denotes the height from the
//  chosen base to the apex opposite it:
export const V_tetrahedron = (h = 1) => {

};


// Returns the volume of a parallelepiped having as lattice edge lengths `s1`,
//  `s2` and `s3`, height as measured orthogonally from the (chosen) base to
//  the opposing face `h` and internal angles `α`, `β` and `γ`:
export const V_parallelepiped = (s1, s2, s3, h) => {

};
