#![feature(test)]
#![feature(portable_simd)]

extern crate test;
use core_simd::simd::{LaneCount, Simd, SupportedLaneCount};
use rand::rngs::StdRng;
use rand::{RngCore, SeedableRng};
use test::{black_box, Bencher};

#[inline(always)]
fn bench_impl<const N: usize, const MASK: u8>(b: &mut Bencher)
where
    LaneCount<N>: SupportedLaneCount,
{
    let mut lookups = Vec::new();
    let mut indexes = Vec::new();
    let mut rng = StdRng::seed_from_u64(46578);

    let sizeof_vec = std::mem::size_of::<Simd<u8, N>>();
    for _ in 0..(2 * 1024 * 1024 / sizeof_vec) {
        let mut lookup = [0; N];
        let mut index = [0; N];
        rng.fill_bytes(&mut lookup);
        rng.fill_bytes(&mut index);
        lookups.push(Simd::<u8, N>::from_array(lookup));
        indexes.push(Simd::<u8, N>::from_array(index));
    }

    b.bytes = (lookups.len() * sizeof_vec) as u64;
    b.iter(|| {
        for (lookup, index) in black_box(&lookups).iter().zip(black_box(&indexes).iter()) {
            let lookup = *lookup;
            let index = *index & Simd::splat(MASK);
            black_box(Simd::<u8, N>::swizzle_dyn(lookup, index));
        }
    });
}

#[bench]
fn bench_swizzle_dyn_16(b: &mut Bencher) {
    bench_impl::<16, 0xff>(b);
}

#[bench]
fn bench_swizzle_dyn_16_mask16(b: &mut Bencher) {
    bench_impl::<16, 0b1111>(b);
}

#[bench]
fn bench_swizzle_dyn_32(b: &mut Bencher) {
    bench_impl::<32, 0xff>(b);
}

#[bench]
fn bench_swizzle_dyn_32_mask16(b: &mut Bencher) {
    bench_impl::<32, 0b1111>(b);
}

#[bench]
fn bench_swizzle_dyn_32_mask32(b: &mut Bencher) {
    bench_impl::<32, 0b1_1111>(b);
}

#[bench]
fn bench_swizzle_dyn_64(b: &mut Bencher) {
    bench_impl::<64, 0xff>(b);
}

#[bench]
fn bench_swizzle_dyn_64_mask16(b: &mut Bencher) {
    bench_impl::<64, 0b1111>(b);
}

#[bench]
fn bench_swizzle_dyn_64_mask32(b: &mut Bencher) {
    bench_impl::<64, 0b1_1111>(b);
}

#[bench]
fn bench_swizzle_dyn_64_mask64(b: &mut Bencher) {
    bench_impl::<64, 0b11_1111>(b);
}

#[bench]
fn bench_swizzle_dyn_5_mask_8(b: &mut Bencher) {
    bench_impl::<5, 0b111>(b);
}

#[bench]
fn bench_swizzle_dyn_24(b: &mut Bencher) {
    bench_impl::<24, 0xff>(b);
}

#[bench]
fn bench_swizzle_dyn_24_mask16(b: &mut Bencher) {
    bench_impl::<24, 0b1111>(b);
}

#[bench]
fn bench_swizzle_dyn_43(b: &mut Bencher) {
    bench_impl::<43, 0xff>(b);
}

#[bench]
fn bench_swizzle_dyn_43_mask16(b: &mut Bencher) {
    bench_impl::<43, 0b1111>(b);
}
