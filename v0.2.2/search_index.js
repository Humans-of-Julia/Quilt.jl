var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = PatternFolds","category":"page"},{"location":"#PatternFolds","page":"Home","title":"PatternFolds","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [PatternFolds]","category":"page"},{"location":"#PatternFolds.PatternFold","page":"Home","title":"PatternFolds.PatternFold","text":"PatternFold{T, P}\n\nA Union type used as an interface for folded patterns such as VectorFold. To implement the interface and inherit from it, a new structure MyFold{T[,P]} must define three fields:\n\npattern::P. Note that both length(::P) and rand(::P) methods must be available\ngap::TS\nfolds::int\n\nFinally one can redefine PatternFold{T}\n\nPatternFold{T} = Union{AbstractVectorFold{T}, IntervalsFold{T}, MyFold{T[,P]}}\n\n\n\n\n\n","category":"type"},{"location":"#PatternFolds.AbstractVectorFold","page":"Home","title":"PatternFolds.AbstractVectorFold","text":"AbstractVectorFold{T, P}\n\nAn abstract type used as an interface for folded vectors such as VectorFold. To implement the interface and inherit from it, a new structure must define three fields:\n\npattern::P. Note that both length(::P) and rand(::P) methods must be available\ngap::T\nfolds::int\n\n\n\n\n\n","category":"type"},{"location":"#PatternFolds.IVectorFold","page":"Home","title":"PatternFolds.IVectorFold","text":"VectorFold{T,V <: AbstractVector{T}}\n\nA folded vector structure that extends the methods of AbstractVector to a folded structure.\n\n\n\n\n\n","category":"type"},{"location":"#PatternFolds.VectorFold","page":"Home","title":"PatternFolds.VectorFold","text":"VectorFold{T,V <: AbstractVector{T}}\n\nA mutable structure for folded vector that extends the methods of AbstractVector. Compared to IVectorFold, this tructure is about 20% faster using iterators. Note that this structure keep an active pointer to the current unfolded pattern. However, its external behavior is similar to IVectorFold.\n\n\n\n\n\n","category":"type"},{"location":"#Base.iterate-Tuple{IVectorFold}","page":"Home","title":"Base.iterate","text":"iterate(iter)\n\nExtends iterate methods from Base to allow forward and reverse iteration on both VectorFold and MVectorFold.\n\n\n\n\n\n","category":"method"},{"location":"#Base.length-Tuple{Union{PatternFolds.AbstractVectorFold, IntervalsFold}}","page":"Home","title":"Base.length","text":"length(pf<:PatternFold)\n\nReturn the length of pf if unfolded.\n\n\n\n\n\n","category":"method"},{"location":"#Base.rand-Tuple{PF} where PF<:Union{PatternFolds.AbstractVectorFold, IntervalsFold}","page":"Home","title":"Base.rand","text":"rand(pf<:PatternFold)\n\nReturns a random value of pf as if it was unfolded.\n\n\n\n\n\n","category":"method"},{"location":"#Base.rand-Tuple{Set{var\"#s45\"} where var\"#s45\"<:PatternFolds.AbstractVectorFold}","page":"Home","title":"Base.rand","text":"Base.rand(::Vector{AbstractVectorFold})\nExtend the `Base.rand` function to `Vector{AbstractVectorFold}`.\n\n\n\n\n\n","category":"method"},{"location":"#Base.rand-Tuple{V} where V<:(Set{var\"#s10\"} where var\"#s10\"<:IntervalsFold)","page":"Home","title":"Base.rand","text":"Base.rand(::Vector{IntervalsFold})\n\nExtend the Base.rand function to Vector{IntervalsFold}.\n\n\n\n\n\n","category":"method"},{"location":"#PatternFolds.fold-Union{Tuple{V}, Tuple{T}, Tuple{V, Any}} where {T<:Real, V<:AbstractVector{T}}","page":"Home","title":"PatternFolds.fold","text":"fold(v::V, depth = 0)\n\nreturns a suitable VectorFold, which when unfolded gives the Vector V.\n\n\n\n\n\n","category":"method"},{"location":"#PatternFolds.folds-Tuple{Any}","page":"Home","title":"PatternFolds.folds","text":"folds(<:PatternFold)\n\nReturn the number of folds. An infinite folded pattern returns 0.\n\n\n\n\n\n","category":"method"},{"location":"#PatternFolds.gap-Tuple{Any}","page":"Home","title":"PatternFolds.gap","text":"gap(<:PatternFold)\n\nReturn the gap between the starts of consecutive folds.\n\n\n\n\n\n","category":"method"},{"location":"#PatternFolds.make_vector_fold","page":"Home","title":"PatternFolds.make_vector_fold","text":"make_vector_fold(pattern, gap, fold, kind = :mutable)\n\nA dispatcher to construct a folded vector. The kind of vector can be set to either :mutable (default) or :immutable. The default is faster in most cases but it depends on the pattern, gap, and fold parameters. For critical code, it is recommended to benchmark both options.\n\n\n\n\n\n","category":"function"},{"location":"#PatternFolds.pattern-Tuple{Any, Any}","page":"Home","title":"PatternFolds.pattern","text":"pattern(vf, index)\n\nReturn the element at index in the original pattern.\n\n\n\n\n\n","category":"method"},{"location":"#PatternFolds.pattern-Tuple{Any}","page":"Home","title":"PatternFolds.pattern","text":"pattern(<:PatternFold)\n\nReturn the pattern of any PatternFold. The pattern defines the occurences of the first fold.\n\n\n\n\n\n","category":"method"},{"location":"#PatternFolds.pattern_length-Tuple{Any}","page":"Home","title":"PatternFolds.pattern_length","text":"pattern_length(pf<:PatternFold)\n\nReturn the length of the basic pattern of pf.\n\n\n\n\n\n","category":"method"},{"location":"#PatternFolds.reset_pattern!-Tuple{Any}","page":"Home","title":"PatternFolds.reset_pattern!","text":"reset_pattern!(<:PatternFold)\n\nReset the unfolded pattern to the first fold.\n\n\n\n\n\n","category":"method"},{"location":"#PatternFolds.set_fold!","page":"Home","title":"PatternFolds.set_fold!","text":"set_fold!(mvf::VectorFold, new_fold = mvf.current + 1)\n\nSet the unfolded pattern to new_fold. By default move the next fold after current.\n\n\n\n\n\n","category":"function"},{"location":"#PatternFolds.unfold-Tuple{IVectorFold}","page":"Home","title":"PatternFolds.unfold","text":"unfold(vf::VectorFold; from=1, to=folds(vf))\n\nConstruct the unfolded version of vf (with the same type as pattern(vf)) based. Please note that using an iterator on vf avoid memory allocation, which is not the case of unfold.\n\n\n\n\n\n","category":"method"}]
}