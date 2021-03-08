"""
    PatternFold{T, P}
An abstract stype used as an interface for folded patterns such as `VectorFold`.
To implement the interface and inherit from it, a new structure must define three fields:
- `pattern::P`. Note that both `length(::P)` and `rand(:P)` methods must be available
- `gap::T`
- `folds::int`
"""
abstract type PatternFold{T, P} end

pattern(pf) = pf.pattern
gap(pf) = pf.gap
folds(pf) = pf.folds

# TODO - look if another name is more appropriate
pattern_length(pf) = length(pattern(pf))

length(pf) = pattern_length(pf) * folds(pf)

function rand(pf::PF) where {PF <: PatternFold}
    return rand(pattern(pf)) + rand(0:(folds(pf) - 1)) * gap(pf)
end
