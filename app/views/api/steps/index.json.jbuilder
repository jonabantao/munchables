@steps.each do |step|
  json.set! step.id do 
    json.partial! 'api/steps/step', step: step
  end
end