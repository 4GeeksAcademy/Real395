export const BudgetTable = ({ title, data, setData }) => {

  const handleChange = (index, field, value) => {
    setData((prev) => {
      const updated = [...prev];
      const item = { ...updated[index] };

      item[field] = field === "category" ? value : Number(value);

      const qty = Number(item.quantity) || 0;
      const base = Number(item.base) || 0;

      item.total = qty * base;

      updated[index] = item;
      return updated;
    });
  };

  return (
    <div className="mb-5 p-3 border rounded shadow-sm">

      <h5 className="mb-3 fw-bold">{title}</h5>

      <table className="table table-sm table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Base</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  className="form-control"
                  value={item.category}
                  onChange={(e) =>
                    handleChange(index, "category", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  className="form-control"
                  value={item.quantity}
                  onChange={(e) =>
                    handleChange(index, "quantity", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  className="form-control"
                  value={item.base}
                  onChange={(e) =>
                    handleChange(index, "base", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  className="form-control"
                  value={item.total.toFixed(2)}
                  disabled
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};