#![feature(portable_simd)]
use core_simd::simd::{LaneCount, Simd, SupportedLaneCount};

#[inline(always)]
fn masked_swizzle_dyn<const N: usize, const MASK: u8>(
    bytes: Simd<u8, N>,
    idxs: Simd<u8, N>,
) -> Simd<u8, N>
where
    LaneCount<N>: SupportedLaneCount,
{
    let idxs = idxs & Simd::splat(MASK);
    Simd::<u8, N>::swizzle_dyn(bytes, idxs)
}

fn swizzle_dyn_16(bytes: Simd<u8, 16>, idxs: Simd<u8, 16>) -> Simd<u8, 16> {
    masked_swizzle_dyn::<16, 0xff>(bytes, idxs)
}

fn swizzle_dyn_16_mask16(bytes: Simd<u8, 16>, idxs: Simd<u8, 16>) -> Simd<u8, 16> {
    masked_swizzle_dyn::<16, 0b1111>(bytes, idxs)
}

fn swizzle_dyn_32(bytes: Simd<u8, 32>, idxs: Simd<u8, 32>) -> Simd<u8, 32> {
    masked_swizzle_dyn::<32, 0xff>(bytes, idxs)
}

fn swizzle_dyn_32_mask16(bytes: Simd<u8, 32>, idxs: Simd<u8, 32>) -> Simd<u8, 32> {
    masked_swizzle_dyn::<32, 0b1111>(bytes, idxs)
}

fn swizzle_dyn_32_mask32(bytes: Simd<u8, 32>, idxs: Simd<u8, 32>) -> Simd<u8, 32> {
    masked_swizzle_dyn::<32, 0b1_1111>(bytes, idxs)
}

fn swizzle_dyn_64(bytes: Simd<u8, 64>, idxs: Simd<u8, 64>) -> Simd<u8, 64> {
    masked_swizzle_dyn::<64, 0xff>(bytes, idxs)
}

fn swizzle_dyn_64_mask16(bytes: Simd<u8, 64>, idxs: Simd<u8, 64>) -> Simd<u8, 64> {
    masked_swizzle_dyn::<64, 0b1111>(bytes, idxs)
}

fn swizzle_dyn_64_mask32(bytes: Simd<u8, 64>, idxs: Simd<u8, 64>) -> Simd<u8, 64> {
    masked_swizzle_dyn::<64, 0b1_1111>(bytes, idxs)
}

fn swizzle_dyn_64_mask64(bytes: Simd<u8, 64>, idxs: Simd<u8, 64>) -> Simd<u8, 64> {
    masked_swizzle_dyn::<64, 0b11_1111>(bytes, idxs)
}

#[rustfmt::skip]
fn main() {
    println!("16     = {:p}", swizzle_dyn_16 as *const ());
    println!("16@16  = {:p}", swizzle_dyn_16_mask16 as *const ());
    println!("32     = {:p}", swizzle_dyn_32 as *const ());
    println!("32@16  = {:p}", swizzle_dyn_32_mask16 as *const ());
    println!("32@32  = {:p}", swizzle_dyn_32_mask32 as *const ());
    println!("64     = {:p}", swizzle_dyn_64 as *const ());
    println!("64@16  = {:p}", swizzle_dyn_64_mask16 as *const ());
    println!("64@32  = {:p}", swizzle_dyn_64_mask32 as *const ());
    println!("64@64  = {:p}", swizzle_dyn_64_mask64 as *const ());
}
