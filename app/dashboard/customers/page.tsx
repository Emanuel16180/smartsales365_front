"use client"

import { Card } from "@/components/ui/card"

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Clientes</h1>
        <p className="text-slate-600 mt-1">Gestiona la información de tus clientes</p>
      </div>

      <Card className="p-6">
        <div className="text-center py-12">
          <p className="text-slate-600">No hay clientes registrados aún</p>
        </div>
      </Card>
    </div>
  )
}
