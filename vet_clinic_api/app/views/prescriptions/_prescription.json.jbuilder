json.extract! prescription, :id, :vet_prescription, :prescribed_by, :disease, :livestock, :completed, :created_at, :updated_at
json.url prescription_url(prescription, format: :json)
