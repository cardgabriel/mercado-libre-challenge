import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import axios from "axios";
import useFetch from "@/common/hooks/useFetch";

// Mock axios
vi.mock("axios");

describe("useFetch hook", () => {
  const mockData = { items: [{ id: 1, name: "Test Product" }] };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("debería cargar datos correctamente", async () => {
    // Configurar mock de axios
    vi.mocked(axios.get).mockResolvedValueOnce({ data: mockData });

    // Renderizar el hook
    const { result } = renderHook(() => useFetch("http://test-api.com/items"));

    // Inicialmente debería estar cargando
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    // Esperar a que se resuelva la promesa
    await waitFor(() => expect(result.current.loading).toBe(false));

    // Verificar que los datos se hayan cargado correctamente
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBe(null);
    expect(axios.get).toHaveBeenCalledWith("http://test-api.com/items", {
      params: undefined,
    });
  });

  it("debería usar la caché para solicitudes repetidas", async () => {
    // Primera llamada
    vi.mocked(axios.get).mockResolvedValueOnce({ data: mockData });

    // Renderizar el hook
    const { result, rerender } = renderHook(({ url }) => useFetch(url), {
      initialProps: { url: "http://test-api.com/items" },
    });

    // Esperar a que se resuelva la primera promesa
    await waitFor(() => expect(result.current.loading).toBe(false));

    // Limpiar las llamadas anteriores antes de re-renderizar
    vi.mocked(axios.get).mockClear();

    // Re-renderizar con la misma URL para simular otro uso del mismo hook
    rerender({ url: "http://test-api.com/items" });

    // Verificar que axios.get no se haya llamado de nuevo (usó caché)
    expect(axios.get).not.toHaveBeenCalled();
  });
});
