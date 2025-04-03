import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductItem from "@/modules/product-list/components/ProductItem/ProductItem";
import { Product } from "@/modules/product-list/models/models";

describe("ProductItem", () => {
  const mockProduct: Product = {
    id: "MLA1",
    title: "iPhone 13 Pro Max 256GB",
    price: {
      currency: "ARS",
      amount: 450000,
      decimals: 0,
    },
    picture: "https://example.com/iphone.jpg",
    free_shipping: true,
    city: "Buenos Aires",
  };

  const mockProductNoShipping: Product = {
    ...mockProduct,
    id: "MLA2",
    free_shipping: false,
  };

  const renderWithRouter = (product: Product) => {
    return render(
      <MemoryRouter initialEntries={["/items?search=iphone"]}>
        <Routes>
          <Route path="/items" element={<ProductItem product={product} />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it("debería renderizar correctamente la información del producto", () => {
    renderWithRouter(mockProduct);

    // Verificar que se muestra el título del producto
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();

    // Verificar que se muestra el precio formateado
    expect(
      screen.getByText(`$ ${mockProduct.price.amount.toLocaleString("es-AR")}`)
    ).toBeInTheDocument();

    // Verificar que se muestra la ubicación
    expect(screen.getByText(mockProduct.city)).toBeInTheDocument();

    // Verificar que la imagen del producto existe
    const productImage = screen.getByAltText(mockProduct.title);
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute("src", mockProduct.picture);
  });

  it("debería mostrar el ícono de envío gratis cuando free_shipping es true", () => {
    renderWithRouter(mockProduct);

    // Verificar que se muestra el ícono de envío gratis
    const shippingIcon = screen.getByAltText("Envío gratis");
    expect(shippingIcon).toBeInTheDocument();
  });

  it("NO debería mostrar el ícono de envío gratis cuando free_shipping es false", () => {
    renderWithRouter(mockProductNoShipping);

    // Verificar que NO se muestra el ícono de envío gratis
    const shippingIcon = screen.queryByAltText("Envío gratis");
    expect(shippingIcon).not.toBeInTheDocument();
  });
});
